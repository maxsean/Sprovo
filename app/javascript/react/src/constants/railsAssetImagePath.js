let railsAssetImagePath;
if (process.env.NODE_ENV === 'development') {
  railsAssetImagePath = filePath => `/assets/${filePath}`;
}

if (process.env.NODE_ENV === 'production') {
  railsAssetImagePath = filePath => `/assets/${filePath}`;
}

export { railsAssetImagePath }
