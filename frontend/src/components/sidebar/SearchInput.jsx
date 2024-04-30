import React, {useState} from "react";
import { IoSearch } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";


function SearchInput() {
  const  [search, setsearch] = useState("")
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversations()

const handleSubmit = (e) => {
  e.preventDefault()
  if(!search) return;
  if(search.length < 3){
    return toast.error('search must me at  least 3 char acters long');
  }

  const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

  if(conversation){
    setSelectedConversation(conversation)
    setsearch('')
  }else return toast.error('bruh really? no user found, try again weirdo')
}


  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="search"
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <IoSearch />
      </button>
    </form>
  );
}

export default SearchInput;
