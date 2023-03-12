import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  OrderedList,
  UnorderedList,
} from "../../assets";

export const INLINE_STYLES = [
  { label: "Bold", style: "BOLD", icon: Bold },
  { label: "Italic", style: "ITALIC", icon: Italic },
  { label: "Underline", style: "UNDERLINE", icon: Underline },
  { label: "Strikethrough", style: "STRIKETHROUGH", icon: Strikethrough },
  { label: "OL", style: "ordered-list-item", icon: OrderedList },
  { label: "UL", style: "unordered-list-item", icon: UnorderedList },
  // { label: "Monospace", style: "CODE", icon: false },
];

export const BLOCK_TYPES = [
  { label: "H1", style: "header-one", icon: false },
  { label: "H2", style: "header-two", icon: false },
  { label: "H3", style: "header-three", icon: false },
  { label: "H4", style: "header-four", icon: false },
  { label: "H5", style: "header-five", icon: false },
  { label: "H6", style: "header-six", icon: false },
  // { label: "Blockquote", style: "blockquote", icon: false },
  // { label: "Code Block", style: "code-block", icon: false },
];
