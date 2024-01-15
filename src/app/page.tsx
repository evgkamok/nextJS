import Button from "@/components/common/Button/Button";
import HeadTitleTag from "@/components/common/HeadTitleTag/HeadTitleTag";

export default function Home() {
  return (
    <>
      <HeadTitleTag tag="h1">Hello world NEXT !</HeadTitleTag>
      <Button appearance="primary" arrow="down">Primary button</Button>
      <Button appearance="ghost" arrow="right">Ghost button</Button>
      <Button appearance="primary">Ghost button</Button>
    </>
  );
}
