import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
interface PricingSectionListItemsProps {
  src: string | StaticImport | null;
  alt?: string | undefined;
  text?: string;
}
const PricingSectionListItems = ({
  src,
  alt,
  text,
}: PricingSectionListItemsProps) => {
  return (
    <List>
      <Image src={`${src}`} alt={alt || ""} width={18} height={18} />
      <span style={{ marginLeft: "12px" }}>{text}</span>
    </List>
  );
};

export default PricingSectionListItems;

const List = styled.li`
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-weight: 500;
  color: #cad1e9;
`;
