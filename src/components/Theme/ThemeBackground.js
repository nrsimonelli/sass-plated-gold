const ThemeBackground = ({ children }) => {
  return (
    // Remove transition-all to disable the background color transition.
    <body className='light:bg-blue-100 dark:bg-blue-600 transition-all'>
      {children}
    </body>
  );
};

export default ThemeBackground;
