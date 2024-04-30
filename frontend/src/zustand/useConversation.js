// import {create} from 'zustand';
// // import useGetConversation from '../hooks/useGetConversation.js';



// const useConversation = create((set) => ({
//     selectedConversation: null,
//     setSelectedConversation: (selectedConversation) => set({selectedConversation}),
//     messages: [],
//     setMessages: (messages) => set({messages})

// }))

// export default useConversation



import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => set({ messages }),
}));

export default useConversation;