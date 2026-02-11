/**
 * Asset versioning utility for cache-busting
 * Increment ASSET_VERSION when assets are updated to force browser refresh
 */

export const ASSET_VERSION = '3';

/**
 * Appends a version query string to an asset URL for cache-busting
 * @param assetPath - The asset path (e.g., "/assets/generated/image.jpg")
 * @returns The asset path with version query string
 */
export function versionAsset(assetPath: string): string {
  const separator = assetPath.includes('?') ? '&' : '?';
  return `${assetPath}${separator}v=${ASSET_VERSION}`;
}
