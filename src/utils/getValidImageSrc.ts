export function getValidImageSrc(photo: string | File | undefined | null): string | null {
  if (!photo) return null;

  if (typeof photo === 'string') {
    const trimmed = photo.trim();

    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return trimmed;
    }

    if (trimmed.startsWith('/')) {
      return trimmed;
    }

    return null;
  }

  if (photo instanceof File) {
    return URL.createObjectURL(photo);
  }

  return null;
}