// Components
import Card from "@/components/Card"
// Messages
import english_lessons_messages from "@/messages/home/english_lessons.json";
// Utils
import { applyVariablesToJson } from "@/utils/applyVariablesToJson";

export default function EnglishLessons() {
  const messages = applyVariablesToJson(english_lessons_messages);
  return (
    <div className="flex flex-wrap justify-center items-center gap-5">
      {messages.map((message, index) => (
        <Card
          key={index}
          title={message.title}
          description={message.description}
          image={message.image}
          link={message.link}
        />
      ))}
    </div>
  );
}
