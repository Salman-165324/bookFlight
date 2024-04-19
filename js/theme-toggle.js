const toggleTheme = () => {
  const currentTheme = localStorage.getItem("theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  updateTheme(newTheme);
};

// get system theme
const getSystemTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  } else {
    return "light";
  }
};

// Function to update the meta tag for color scheme
const updateTheme = (theme) => {
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  const metaTag = document.querySelector('meta[name="color-scheme"]');
  metaTag.setAttribute("content", theme);
};

// Event listener for the toggle button
document.getElementById("themeToggle").addEventListener("click", toggleTheme);

// Initialize the theme on page load
const initTheme = () => {
  const systemTheme = getSystemTheme();
  const localStorageSavedTheme = localStorage.getItem("theme");
  const currentTheme = localStorageSavedTheme
    ? localStorageSavedTheme
    : systemTheme;

  updateTheme(currentTheme);
};

// Call initTheme on page load
window.onload = initTheme;
