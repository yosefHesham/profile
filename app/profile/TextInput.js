export default function TextInput({
  editable = false,
  label,
  register,
  placeHolder,
  name,
  errorMessage,
  border = true,
}) {
  return (
    <div
      className={`  flex flex-col mb-5  min-h-[80px]  max-h-[80px] font-primary `}
    >
      <label className="text-[#A2A1A8] font-light mb-2">{label}</label>
      <input
        className={`text-[#16151C] ${
          border ? " border-b  border-[#A2A1A833]" : ""
        } pb-1 mb-1 font-light text-base `}
        {...register}
        placeholder={placeHolder}
        readOnly={!editable}
        name={name}
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}
