// import { Dayjs } from "dayjs";
// import { SelectChangeEvent } from "@mui/material";
// import { csfListObjectType } from "@/store/reducers/reducerInterface";
import { SxProps } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React, { SyntheticEvent } from "react";
/**
 * Form and Input events
 */
export type inputChangeEventType = React.ChangeEvent<HTMLInputElement>;
export type formSubmitEventType = React.FormEvent<HTMLFormElement>;
// export interface CardComponentPropTypes {
//   data: csfListObjectType;
//   shrink?: boolean;
//   handleOpenCard?: (data: csfListObjectType) => void;
// }

/**
 * Axios API Client: Types for custom responses and payloads
 */
export type ApiResponse<T> = {
  data: T;
  status: number;
};
export type CustomResponse<DataType> = {
  data: DataType;
  status: number;
};

/**
 * Generic Interfaces
 */
export interface GenericObjectInterface {
  [key: string]: any;
}
export type ArrayOfStringType = string[];
export type ArrayOfNumberType = number[];

/**
 * Custom button interface
 */
export interface customButtonPropTypes {
  buttonText: string | React.ReactNode;
  variant?: "outlined" | "contained" | "text";
  type?: "submit" | "button";
  btnBackgroundColor?: string;
  btnTextColor?: string;
  btnWidth?: number | string;
  // btnMinWidth?:
  // | number
  // | string
  // | { [key in "sm" | "md" | "lg"]?: number | string };
  btnHeight?: number | string;
  disabled?: boolean;
  handleClick?: () => void;
  otherStyles?: SxProps;
  showLoading?: boolean;
  loaderSize?: number;
}

/**
 * LottieProvider interface
 */
interface LottieFileType {
  v: string;
  fr: number;
  ip: number;
  op: number;
  layers: any[];
  assets: any[];
}
export interface lottieAnimProviderProptypes {
  animationFile: LottieFileType;
  height?: number;
  width?: number;
  autoplay?: boolean;
  loop?: boolean;
}

/**
 * Custom animated button interface
 */
export interface customAnimButtonPropTypes {
  buttonText: string | React.ReactNode;
  type?: "submit" | "button";
  btnBackgroundColor?: string;
  btnTextColor?: string;
  btnWidth?: number | string;
  btnHeight?: number | string;
  disabled?: boolean;
  handleClick?: () => void;
  wrapperStyles?: React.CSSProperties;
  showLoader?: boolean;
}

/**
 * Video component interface
 */
export interface videoComponentPropTypes {
  videoSrc: string;
  posterPath: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  rounded?: boolean;
  otherClass?: string;
  handlePlay?: (ev: SyntheticEvent<HTMLVideoElement, Event>) => void;
  handlePause?: (ev: SyntheticEvent<HTMLVideoElement, Event>) => void;
  handleLoadedData?: (ev: SyntheticEvent<HTMLVideoElement, Event>) => void;
  handleTimeUpdate?: (ev: SyntheticEvent<HTMLVideoElement, Event>) => void;
  handleVideoEnd?: (ev: SyntheticEvent<HTMLVideoElement, Event>) => void;
}

export interface ServicesCardsPropTypes {
  imagePath: JSX.Element;
  image: string;
  title: string;
  body: string;
  bullets: string[];
  color: string;
}

export interface WhyPyrackCardsPropTypes {
  imageBackground: string;
  title: string;
  body: string;
}

export interface FeedbackCardsPropTypes {
  feedbackData: GenericObjectInterface[];
}

export interface SocialIconsPropTypes {
  iconName: React.ReactNode;
  iconTitle?: string;
  buttonStyle?: SxProps;
  handleClick?: () => void;
  link: string;
}

export interface SlidingWrapperPropTypes {
  children: React.ReactNode;
}

export interface BlogInterface {
  id: number;
  title: string;
  author: string;
  featuredImage: string;
  subtitle: string;
  slug: string;
  tags: string[];
  content: string;
  createdAt: Date;
}

export interface ChatbotProps {
  messages: { id: string; role: string; content: string }[];
  setMessages: React.Dispatch<React.SetStateAction<{ id: string; role: string; content: string }[]>>;
}

