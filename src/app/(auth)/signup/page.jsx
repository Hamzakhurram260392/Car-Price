"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
  
    const router = useRouter();
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError("");
      setSuccess("");
      setLoading(true);
      if (!email || !password || !name) { 
        setError("All fields are required");
      } else {
        setError("");
        setSuccess("");
        const response = await fetch("http://localhost:3002/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
        if (data.code === 201) {
          setSuccess(data.message);
          router.push("/login");
        } else {
          setError(data.message);
        }
      }
      setLoading(false);
    };

  
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-4 ">
      <h3 className="text-4xl font-bold text-purple-700">Contact Form</h3>

      {error && (
        <p className="px-4 text-sm text-red-500 rounded-md bg-red-500/30 ">
          {error}
        </p>
      )}
      {success && (
        <p className="px-4 text-sm rounded-md text-emerald-500 bg-emerald-500/30 ">
          {success}
        </p>
      )}
     
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="p-2 text-black rounded-md"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="p-2 text-black rounded-md"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="p-2 text-black rounded-md"
        />
        {/* <input
          type="Service"
          value={Service}
          onChange={(e) => setService(e.target.value)}
          placeholder="Service"
          className="p-2 text-black rounded-md"
        /> */}
        <button className="h-10 text-white bg-purple-700 rounded-md hover:bg-purple-600/80" type="submit">
        {loading ? "Loading..." :"Conatct Me"}</button>
      </form>
    </div>
  );
}
