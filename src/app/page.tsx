import Button from "@/components/common/Button/Button";
import HeadTitleTag from "@/components/common/HeadTitleTag/HeadTitleTag";
import Paragraph from "@/components/common/Paragraph/Paragraph";
import Tag from "@/components/common/Tag/Tag";

export default function Home() {
  return (
    <>
      <HeadTitleTag tag="h1">Hello world NEXT !</HeadTitleTag>
      <Button appearance="primary" arrow="right">Primary button</Button>
      <Button appearance="ghost" arrow="right">Ghost button</Button>
      <Paragraph>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</Paragraph>
      <Paragraph font_size="s">Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!</Paragraph>
      <Paragraph font_size="l">Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.</Paragraph>
      <Tag size="m" color="gray">gray m</Tag>
      <Tag size="s" color="gray">gray s</Tag>
      <Tag size="m" color="green" href="www.google.com">green m</Tag>
      <Tag size="s" color="green" href="www.google.com">green s</Tag>
      <Tag size="m" color="primary">gray m</Tag>
      <Tag size="s" color="primary">gray s</Tag>
      <Tag size="m" color="red" href="www.google.com">red m</Tag>
      <Tag size="s" color="red" href="www.google.com">red s</Tag>
      <Tag size="m" color="white">white m</Tag>
      <Tag size="s" color="white" href="www.google.com">white s</Tag>
    </>
  );
}
