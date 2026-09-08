/**
 * Normalizes various image and document URLs (Google Drive, GitHub, Dropbox, Imgur, etc.)
 * to ensure direct embeddable links and proper rendering.
 */
export function normalizeImageUrl(url?: string): string {
  if (!url || typeof url !== 'string') return '';
  const trimmed = url.trim();
  if (!trimmed) return '';

  // If it's already a base64 data URL or local /uploads URL, return as is
  if (trimmed.startsWith('data:') || trimmed.startsWith('/uploads') || trimmed.startsWith('blob:')) {
    return trimmed;
  }

  // 1. Google Drive Sharing Links
  // https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  // https://drive.google.com/open?id=FILE_ID
  // https://drive.google.com/uc?id=FILE_ID
  const gDriveMatch = trimmed.match(/drive\.google\.com\/(?:file\/d\/([a-zA-Z0-9_-]+)|open\?id=([a-zA-Z0-9_-]+)|uc\?(?:[^&]*&)*id=([a-zA-Z0-9_-]+))/i);
  if (gDriveMatch) {
    const fileId = gDriveMatch[1] || gDriveMatch[2] || gDriveMatch[3];
    if (fileId) {
      return `https://lh3.googleusercontent.com/d/${fileId}`;
    }
  }

  // 2. GitHub Blob Links -> Raw Content Links
  // https://github.com/user/repo/blob/main/path/to/image.png
  const githubBlobMatch = trimmed.match(/github\.com\/([^\/]+)\/([^\/]+)\/blob\/(.+)$/i);
  if (githubBlobMatch) {
    const [, user, repo, rest] = githubBlobMatch;
    return `https://raw.githubusercontent.com/${user}/${repo}/${rest}`;
  }

  // 3. Dropbox Links
  // https://www.dropbox.com/s/xyz/photo.jpg?dl=0
  if (trimmed.includes('dropbox.com') && (trimmed.includes('?dl=0') || trimmed.includes('?dl=1'))) {
    return trimmed.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace(/[?&]dl=[01]/, '');
  }

  return trimmed;
}
