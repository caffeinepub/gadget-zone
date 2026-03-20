import { HttpAgent } from "@icp-sdk/core/agent";
import { useState } from "react";
import { loadConfig } from "../config";
import { StorageClient } from "../utils/StorageClient";
import { useInternetIdentity } from "./useInternetIdentity";

export function useImageUpload() {
  const { identity } = useInternetIdentity();
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const uploadImage = async (file: File): Promise<string> => {
    setUploading(true);
    setProgress(0);
    try {
      const config = await loadConfig();
      const agent = new HttpAgent({
        identity: identity || undefined,
        host: config.backend_host,
      });
      const client = new StorageClient(
        config.bucket_name,
        config.storage_gateway_url,
        config.backend_canister_id,
        config.project_id,
        agent,
      );
      const bytes = new Uint8Array(await file.arrayBuffer());
      const { hash } = await client.putFile(bytes, (pct) => setProgress(pct));
      const url = await client.getDirectURL(hash);
      return url;
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  return { uploadImage, uploading, progress };
}
