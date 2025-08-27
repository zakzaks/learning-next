"use client";

import { useActionState } from "react";
import { create } from "./actions";

const initialState = {
	error: "",
};

export default function UserForm() {
	const [state, formAction, pending] = useActionState(create, initialState);
	return (
		<form className="flex flex-col gap-3 w-72" action={formAction}>
			<label htmlFor="">Nama</label>
			<input className="border border-white" type="text" name="name" />
			{state?.error && <span className="text-red-500">{state.error}</span>}
			<label htmlFor="">Alamat</label>
			<input className="border border-white" type="text" name="address" />
			<button
				className="bg-blue-500 text-white p-2 hover:bg-blue-700 cursor-pointer"
				disabled={pending}
			>
				Submit
			</button>
		</form>
	);
}
