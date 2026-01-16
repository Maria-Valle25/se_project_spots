export function setButtonText(
  btn,
  isLoading,
  defaultText = "save",
  loadingText = "saving..."
) {
  if (isLoading) {
    btn.textContent = loadingText;
  } else {
    btn.textContent = defaultText;
  }
}
