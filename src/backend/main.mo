import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import MixinAuthorization "authorization/MixinAuthorization";
import MixinStorage "blob-storage/Mixin";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);
  include MixinStorage();

  /////////////////////////////////////////////////////////////////////////////
  // Content Types
  /////////////////////////////////////////////////////////////////////////////

  type BannerSlide = {
    id : Nat;
    title : Text;
    subtitle : Text;
    imageUrl : Text;
    position : Nat;
  };

  type Product = {
    id : Nat;
    brand : Text;
    name : Text;
    price : Nat;
    storageOptions : [Text];
    emiAvailable : Bool;
    whatsappMessage : Text;
    imageUrl : Text;
  };

  type BlogPost = {
    id : Nat;
    title : Text;
    slug : Text;
    content : Text;
    excerpt : Text;
    imageUrl : Text;
    publishedAt : Int;
  };

  type Testimonial = {
    id : Nat;
    customerName : Text;
    review : Text;
    rating : Nat;
    product : Text;
  };

  type FaqItem = {
    id : Nat;
    question : Text;
    answer : Text;
    position : Nat;
  };

  /////////////////////////////////////////////////////////////////////////////
  // State (private variables)
  /////////////////////////////////////////////////////////////////////////////

  let bannerSlides = Map.empty<Nat, BannerSlide>();
  let products = Map.empty<Nat, Product>();
  let blogPosts = Map.empty<Nat, BlogPost>();
  let testimonials = Map.empty<Nat, Testimonial>();
  let faqItems = Map.empty<Nat, FaqItem>();

  var marqueeText : Text = "";
  var nextId : Nat = 1;

  /////////////////////////////////////////////////////////////////////////////
  // Banner Slides
  /////////////////////////////////////////////////////////////////////////////

  public shared ({ caller }) func createBannerSlide(title : Text, subtitle : Text, imageUrl : Text, position : Nat) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can create banner slides");
    };

    let id = nextId;
    nextId += 1;

    let slide : BannerSlide = {
      id;
      title;
      subtitle;
      imageUrl;
      position;
    };

    bannerSlides.add(id, slide);
    id;
  };

  public query ({ caller }) func getBannerSlides() : async [BannerSlide] {
    bannerSlides.values().toArray().sort(
      func(a, b) {
        Nat.compare(a.position, b.position);
      }
    );
  };

  public shared ({ caller }) func updateBannerSlide(id : Nat, title : Text, subtitle : Text, imageUrl : Text, position : Nat) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update banner slides");
    };

    switch (bannerSlides.get(id)) {
      case (null) { false };
      case (?_) {
        let updatedSlide : BannerSlide = {
          id;
          title;
          subtitle;
          imageUrl;
          position;
        };
        bannerSlides.add(id, updatedSlide);
        true;
      };
    };
  };

  public shared ({ caller }) func deleteBannerSlide(id : Nat) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete banner slides");
    };

    if (bannerSlides.containsKey(id)) {
      bannerSlides.remove(id);
      true;
    } else {
      false;
    };
  };

  /////////////////////////////////////////////////////////////////////////////
  // Products
  /////////////////////////////////////////////////////////////////////////////

  public shared ({ caller }) func createProduct(brand : Text, name : Text, price : Nat, storageOptions : [Text], emiAvailable : Bool, whatsappMessage : Text, imageUrl : Text) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can create products");
    };

    let id = nextId;
    nextId += 1;

    let product : Product = {
      id;
      brand;
      name;
      price;
      storageOptions;
      emiAvailable;
      whatsappMessage;
      imageUrl;
    };

    products.add(id, product);
    id;
  };

  public query ({ caller }) func getProducts() : async [Product] {
    products.values().toArray();
  };

  public query ({ caller }) func getProductsByBrand(brand : Text) : async [Product] {
    let filtered = products.values().toArray().filter(
      func(p) {
        p.brand == brand;
      }
    );
    filtered;
  };

  public shared ({ caller }) func updateProduct(id : Nat, brand : Text, name : Text, price : Nat, storageOptions : [Text], emiAvailable : Bool, whatsappMessage : Text, imageUrl : Text) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update products");
    };

    switch (products.get(id)) {
      case (null) { false };
      case (?_) {
        let updatedProduct : Product = {
          id;
          brand;
          name;
          price;
          storageOptions;
          emiAvailable;
          whatsappMessage;
          imageUrl;
        };
        products.add(id, updatedProduct);
        true;
      };
    };
  };

  public shared ({ caller }) func deleteProduct(id : Nat) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete products");
    };

    if (products.containsKey(id)) {
      products.remove(id);
      true;
    } else {
      false;
    };
  };

  /////////////////////////////////////////////////////////////////////////////
  // Blog Posts
  /////////////////////////////////////////////////////////////////////////////

  public shared ({ caller }) func createBlogPost(title : Text, slug : Text, content : Text, excerpt : Text, imageUrl : Text) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can create blog posts");
    };

    let id = nextId;
    nextId += 1;

    let blogPost : BlogPost = {
      id;
      title;
      slug;
      content;
      excerpt;
      imageUrl;
      publishedAt = Time.now();
    };

    blogPosts.add(id, blogPost);
    id;
  };

  public query ({ caller }) func getBlogPosts() : async [BlogPost] {
    blogPosts.values().toArray();
  };

  public query ({ caller }) func getBlogPostBySlug(slug : Text) : async ?BlogPost {
    let posts = blogPosts.values().toArray();
    let found = posts.filter(
      func(p) {
        p.slug == slug;
      }
    );
    switch (found.size()) {
      case (0) { null };
      case (_) { ?found[0] };
    };
  };

  public shared ({ caller }) func updateBlogPost(id : Nat, title : Text, slug : Text, content : Text, excerpt : Text, imageUrl : Text) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update blog posts");
    };

    switch (blogPosts.get(id)) {
      case (null) { false };
      case (?_) {
        let updatedPost : BlogPost = {
          id;
          title;
          slug;
          content;
          excerpt;
          imageUrl;
          publishedAt = Time.now();
        };
        blogPosts.add(id, updatedPost);
        true;
      };
    };
  };

  public shared ({ caller }) func deleteBlogPost(id : Nat) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete blog posts");
    };

    if (blogPosts.containsKey(id)) {
      blogPosts.remove(id);
      true;
    } else {
      false;
    };
  };

  /////////////////////////////////////////////////////////////////////////////
  // Testimonials
  /////////////////////////////////////////////////////////////////////////////

  public shared ({ caller }) func createTestimonial(customerName : Text, review : Text, rating : Nat, product : Text) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can create testimonials");
    };

    let id = nextId;
    nextId += 1;

    if (rating < 1 or rating > 5) {
      Runtime.trap("Rating must be between 1 and 5");
    };

    let testimonial : Testimonial = {
      id;
      customerName;
      review;
      rating;
      product;
    };

    testimonials.add(id, testimonial);
    id;
  };

  public query ({ caller }) func getTestimonials() : async [Testimonial] {
    testimonials.values().toArray();
  };

  public shared ({ caller }) func updateTestimonial(id : Nat, customerName : Text, review : Text, rating : Nat, product : Text) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update testimonials");
    };

    if (rating < 1 or rating > 5) {
      Runtime.trap("Rating must be between 1 and 5");
    };

    switch (testimonials.get(id)) {
      case (null) { false };
      case (?_) {
        let updatedTestimonial : Testimonial = {
          id;
          customerName;
          review;
          rating;
          product;
        };
        testimonials.add(id, updatedTestimonial);
        true;
      };
    };
  };

  public shared ({ caller }) func deleteTestimonial(id : Nat) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete testimonials");
    };

    if (testimonials.containsKey(id)) {
      testimonials.remove(id);
      true;
    } else {
      false;
    };
  };

  /////////////////////////////////////////////////////////////////////////////
  // FAQ Items
  /////////////////////////////////////////////////////////////////////////////

  public shared ({ caller }) func createFaqItem(question : Text, answer : Text, position : Nat) : async Nat {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can create faq items");
    };

    let id = nextId;
    nextId += 1;

    let faqItem : FaqItem = {
      id;
      question;
      answer;
      position;
    };

    faqItems.add(id, faqItem);
    id;
  };

  public query ({ caller }) func getFaqItems() : async [FaqItem] {
    faqItems.values().toArray().sort(
      func(a, b) {
        Nat.compare(a.position, b.position);
      }
    );
  };

  public shared ({ caller }) func updateFaqItem(id : Nat, question : Text, answer : Text, position : Nat) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update faq items");
    };

    switch (faqItems.get(id)) {
      case (null) { false };
      case (?_) {
        let updatedFaqItem : FaqItem = {
          id;
          question;
          answer;
          position;
        };
        faqItems.add(id, updatedFaqItem);
        true;
      };
    };
  };

  public shared ({ caller }) func deleteFaqItem(id : Nat) : async Bool {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can delete faq items");
    };

    if (faqItems.containsKey(id)) {
      faqItems.remove(id);
      true;
    } else {
      false;
    };
  };

  /////////////////////////////////////////////////////////////////////////////
  // Marquee Text
  /////////////////////////////////////////////////////////////////////////////

  public shared ({ caller }) func setMarqueeText(text : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can set marquee text");
    };

    marqueeText := text;
  };

  public query ({ caller }) func getMarqueeText() : async Text {
    marqueeText;
  };
};
