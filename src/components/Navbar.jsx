import React, { useRef } from "react";
import "../styles/Navbar.scss";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
} from "@chakra-ui/react";

const Navbar = () => {
  const elements = ["Home", "Pricing", "Blog", "FAQs", "About Us"];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div className="navbar-parent">
      <div className="navbar-parent-logo">
        <h1>witt.</h1>
      </div>
      <div className="navbar-parent-elements">
        <ul>
          {elements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="temp"></div>
      <Button ref={btnRef} onClick={onOpen} className="hamburger">
        |||
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader className="hamburger-heading">witt.</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button variant={"ghost"} onClick={onClose}>
                Home
              </Button>
              <Button variant={"ghost"} onClick={onClose}>
                Pricing
              </Button>
              <Button variant={"ghost"} onClick={onClose}>
                Blog
              </Button>
              <Button variant={"ghost"} onClick={onClose}>
                FAQs
              </Button>
              <Button variant={"ghost"} onClick={onClose}>
                About Us
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Navbar;
