declare module '@spuxx/browser-utils' {
  const Color: {
    background: 'background';
    surface: 'surface';
    accent: 'accent';
    primary: 'primary';
    secondary: 'secondary';
    info: 'info';
    success: 'success';
    warning: 'warning';
    error: 'error';
    rainbow: 'rainbow';
  };

  export type Color = (typeof Color)[keyof typeof Color];
}
