// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import useLogin from "../../hooks/useLogin";

// function Login() {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')

//   const {loading, login} = useLogin()

//   const handleSubmit = async function(e){
//     e.preventDefault()
//     await login({username, password})
//   }
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3xl font-semibold text-center text-gray-300">
//           <span>Login to Kevin's ChatApp</span>
//         </h1>

//         <form onSubmit={handleSubmit}>
//           <div>
//             <label className="label p-2 ">
//               <span className="textbase label-text text-white">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter Username"
//               className="w-full input input-bordered h-10"
//               value={username}
//               onChange={function(e){
//                 setUsername(e.target.value)
//               }}
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text text-white">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full input input-bordered h-10"
//               value={password}
//               onChange={function(e){
//                 setPassword(e.target.value)}}
//             />
//           </div>
//           <Link
//             to="/signup"
//             className="text-sm hover:underline text-white hover:text-blue-600 mt-2 inline-block"
//           >
//             {"Don't"} have an account?
//           </Link>
//           <div>
//             <button className="btn btn-block mt-2"
//             disabled={loading}>
//               {loading ? <span className="loading loading-spinner"></span> : "Login"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

// // import React from "react";

// // function Login() {
// //   return (
// //     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
// //       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
// //         <h1 className="text-3xl font-semibold text-center text-gray-300">
// //           <span>Login to Kevin's ChatApp</span>
// //         </h1>

// //         <form>
// //           <div>
// //             <label className="label p-2 ">
// //               <span className="textbase label-text text-white">Username</span>
// //             </label>
// //             <input
// //               type="text"
// //               placeholder="Enter Username"
// //               className="w-full input input-bordered h-10"
// //             />
// //           </div>
// //           <div>
// //             <label className="label2">
// //               <span className="text-base label-text text-white">Password</span>
// //             </label>
// //             <input
// //               type="password"
// //               placeholder="Enter Password"
// //               className="w-full input input-bordered h-10"
// //             />
// //           </div>
// //           <a
// //             href="#"
// //             className="text-sm hover:underline text-white hover:text-blue-600 mt-2 inline-block"
// //           >
// //             {"Don't"} have an account?
// //           </a>
// //           <div>
// //             <button className="btn btn-block mt-2">
// //               login
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;
import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-200 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-200'>
					Sanders
					<span className='text-blue-500'> ChatApp</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base  text-white label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-10'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base text-white label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Link to='/signup' className='text-sm text-gray-400  hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2' disabled={loading}>
							{loading ? <span className='loading loading-spinner '></span> : "Login"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;

// STARTER CODE FOR THIS FILE
// const Login = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-300'>
// 					Login
// 					<span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>
// 					<a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
// 						{"Don't"} have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2'>Login</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default Login;