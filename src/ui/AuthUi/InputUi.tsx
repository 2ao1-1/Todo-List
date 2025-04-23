type InputForm = {
  title: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputUi({
  title,
  type,
  name,
  value,
  onChange,
}: InputForm) {
  return (
    <div>
      <label className="text-primary/75 font-bold">{title}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={`Enter Your ${title}`}
        required
        className="focus:bg-main hover:bg-main p-2 focus:ring-0 outline-none w-full border-b border-accent"
      />
    </div>
  );
}
