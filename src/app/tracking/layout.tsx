"use client";
import { ColorModeContext } from "@/app/mui/context";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import MenuIcon from "@mui/icons-material/Menu";
import PeopleIcon from "@mui/icons-material/People";
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import NextLink from "next/link";
import { useCallback, useContext, useState } from "react";
type Props = {
  children: React.ReactNode;
};

const menus = [
  {
    label: "ตรวจสอบสถานะพัสดุ",
    href: "/tracking",
    icon: LocalShippingIcon,
  },
];

export default function Layout({ children }: Props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setDrawerOpen(!drawerOpen);
  }, [drawerOpen]);

  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              ระบบติดตามพัสดุ
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {menus.map((menu) => (
                <Button
                  key={menu.label}
                  component={NextLink}
                  href={menu.href}
                  sx={{ color: "inherit" }}
                  startIcon={<menu.icon />}
                >
                  {menu.label}
                </Button>
              ))}
              <Button
                sx={{ ml: "auto" }}
                onClick={colorMode.toggleColorMode}
                color="inherit"
                startIcon={
                  theme.palette.mode === "dark" ? (
                    <Brightness7Icon />
                  ) : (
                    <Brightness4Icon />
                  )
                }
              >
                {theme.palette.mode}
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            variant="temporary"
            open={drawerOpen}
            ModalProps={{ keepMounted: true }}
            onClose={toggleDrawer}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
            }}
          >
            <Box>
              <Box sx={{ display: "flex" }}>
                <Typography variant="h6" sx={{ my: 2, mx: 2 }}>
                  Menu
                </Typography>
                <Button
                  sx={{ ml: "auto" }}
                  onClick={colorMode.toggleColorMode}
                  color="inherit"
                  startIcon={
                    theme.palette.mode === "dark" ? (
                      <Brightness7Icon />
                    ) : (
                      <Brightness4Icon />
                    )
                  }
                >
                  {theme.palette.mode}
                </Button>
              </Box>
              <Divider />
              <List dense>
                {menus.map((menu) => (
                  <ListItem
                    key={menu.label}
                    component={NextLink}
                    href={menu.href}
                    onClick={toggleDrawer}
                    sx={{ color: "inherit", textDecoration: "none" }}
                  >
                    <ListItemIcon>
                      <menu.icon />
                    </ListItemIcon>
                    <ListItemButton>
                      <ListItemText primary={menu.label} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </nav>
        <Box
          component="main"
          sx={{ p: 2 }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
          width="100%"
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </Container>
  );
}
