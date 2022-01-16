import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

const contacts = [
  {
    name: "Saeed Ashoor",
    src: "https://rebrand.ly/saeedashoor",
  },
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
  },
];

function Widget() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
     <div className="flex justify-between items-center text-gray-500 mb-5 ">
     <h2 className="text-xl">Contacts</h2>
     <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
     </div>
     {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widget;
