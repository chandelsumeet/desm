import { post } from "@/app/_types/post.types";
import { Lato } from "next/font/google";
import "./card.scss";
import { lato, latoItalic } from "@/app/layout";
import Link from "next/link";

interface CardProps {
  id: number;
  title: string;
  body: string;
}

const Card = ({ title, body, id }: CardProps) => {
  return (
    <Link href={`post/${id}`}>
      <div className={`${latoItalic.className} card`}>
        <h3 className={`${lato.className} text-center m-0`}>{title}</h3>
        <h6 className={`${lato.className} m-0`}>{body}</h6>
      </div>
    </Link>
  );
};
export default Card;
