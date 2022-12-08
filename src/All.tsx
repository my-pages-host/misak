/* eslint-disable */
import React from "react";
import { AmI } from "./AmI";
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
    <AmI/>
    <Experience/>
    <Certificates/>
    <Call/>
    <Footer />
  </>
);
