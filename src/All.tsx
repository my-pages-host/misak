/* eslint-disable */
import React from "react";
import { CanDo } from "./CanDo";
import { Call } from "./Call";
import { Experience } from "./Experience";
import { Certificates } from "./Certificates";
import { Footer } from "./Footer";
import { Cover } from "./Cover";

export const All: React.FC = () => (
  <>
    <Cover />
    <CanDo/>
    <Experience/>
    <Certificates/>
    <Call/>
    <Footer />
  </>
);
