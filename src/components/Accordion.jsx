import Faq from "./Faq";
const Accordion = ({ items }) => {
  return (
    <>
      <h1>Accordion</h1>
      <div className="accordion">
        {items.map((item) => (
          <Faq title={item.title} content={item.content} />
        ))}
      </div>
    </>
  );
};

export default Accordion;
