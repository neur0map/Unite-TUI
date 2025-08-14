interface SidebarState {
  open: boolean;
}

export const useSidebar = () =>
  useState<SidebarState>("sidebar", () => {
    return {
      open: false,
    };
  });
