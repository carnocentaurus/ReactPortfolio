// Contact.tsx

import { type FC, type FormEvent, useState } from "react";
import { InputElement } from "../layout/SharedStyles";

const Contact: FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        formData.append("access_key", "6d011ba0-63b9-4bce-95a5-892b48feac36");

        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data: { success: boolean; message: string } = await response.json();

            if (response.ok) {
                alert("Your message has been sent!");
                form.reset();
            } 
            else {
                alert("Error: " + data.message);
            }
        } 
        catch (error) {
            alert("Something went wrong. Please try again");
            console.error("Form submission error:", error);
        } 
        finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="
          flex
          flex-col
          bg-[#f4f4f4]
          border-[#333]
          rounded-xl
          gap-2 sm:gap-4 lg:gap-2
          mt-10 sm:mt-20 lg:mt-10
          py-6 sm:py-10 lg:py-7
          px-6 sm:px-10 lg:px-7
          w-70 sm:w-110
          max-w-70 sm:max-w-110
          "
        >

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <InputElement 
                    name="name"
                    placeholder="Your Name" 
                    type="text" 
                    required 
                />
                <InputElement 
                    name="email"
                    placeholder="Your Email" 
                    type="email" 
                    required 
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    className="
                      font-poppins 
                      border sm:border-3 lg:border-2
                    border-[#333]
                    text-[#333]
                      text-base sm:text-3xl lg:text-base
                      w-full
                      h-50 sm:h-60 lg:h-50
                      pt-2
                      px-2 sm:px-4 lg:px-3
                      placeholder:text-base sm:placeholder:text-3xl lg:placeholder:text-base
                    "
                />
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      font-poppins 
                      text-center
                    text-[#f4f4f4]
                    bg-[#333]
                      text-base sm:text-3xl lg:text-base
                      w-full
                      py-1 sm:py-4 lg:py-1
                    hover:bg-[#a3a3a3] hover:text-[#333]
                    "
                >
                    {isSubmitting ? "Sending..." : "Send"}
                </button>
            </form>

        </main>
    );
}

export default Contact;