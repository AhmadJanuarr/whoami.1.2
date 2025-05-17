import SosialMediaIcon from "@/components/Icon"

function ContactItem({ src, title }: { src: string; title: string }) {
  return (
    <li>
      <div className="flex items-center gap-2 tracking-wider">
        <img src={src} alt="logo" width={20} height={20} className="rounded-full" />
        <p className="font-neuBook text-[14px] text-secondary md:text-[15px]">{title}</p>
      </div>
    </li>
  )
}

function ContactInfo() {
  return (
    <div className="tracking-wider md:w-1/2">
      <h5 className="font-neuBold text-[16px] md:text-[18px]">Let’s Build Something Amazing Together!</h5>
      <p className="py-4 font-neuBook text-[14px] md:text-[16px]">
        Looking for collaboration or just want to say hi? Let’s connect!
      </p>
      <ul>
        <ContactItem src="/svg/Address.svg" title="Location : Indonesia, Lampung, Lampung Tengah" />
        <ContactItem src="/svg/Phone.svg" title="Phone : +6289630507889" />
      </ul>
      <div className="flex flex-col gap-2 pt-5">
        <h5 className="py-5 font-neuBold text-[16px]">Get in touch</h5>
        <SosialMediaIcon />
      </div>
    </div>
  )
}

function InputField({ type, placeholder }: { type: string; placeholder: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="mb-4 w-full rounded-lg border border-gray-300 p-2 font-neuBook text-[14px] tracking-wider"
    />
  )
}
function ContactForm() {
  return (
    <form className="tracking-wider md:w-1/2">
      <h5 className="font-neuBold text-[16px] md:text-[18px] ">Contact Form</h5>
      <p className="py-4 font-neuBook  text-[14px] md:text-[16px]">
        Please fill out the form below. I will respond shortly. Let&apos;s create something great together!
      </p>
      <div className="flex gap-4">
        <InputField type="text" placeholder="First Name" />
        <InputField type="text" placeholder="Last Name" />
      </div>
      <InputField type="email" placeholder="Email Address" />
      <InputField type="text" placeholder="Subject" />
      <textarea
        placeholder="Your Message"
        rows={4}
        className="w-full rounded-lg border border-gray-300 p-2 font-neuBook text-[14px] tracking-wider"
      />
      <div className="pt-5">
        <button
          type="submit"
          className="w-full rounded-lg border-[#132C92] bg-secondary p-3 font-bold text-white transition hover:bg-blue-700    "
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default function ContactUs() {
  return (
    <div className="w-full pb-10">
      <div className="paragraph font-neuBook tracking-wider">
        Whether you have a project idea, a question, or just want to say hello, I&apos;d love to hear from you. Feel
        free to reach out using the form below, and I&apos;ll get back to you as soon as possible. Let&apos;s connect
        and bring your vision to life
      </div>
      <div className="flex w-full flex-col gap-10 pt-10 md:flex-row ">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  )
}
