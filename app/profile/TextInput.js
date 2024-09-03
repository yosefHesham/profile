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
    <div className={`flex flex-col mb-5  font-primary `}>
      <label className="text-[#A2A1A8] font-light mb-2">{label}</label>
      <input
        className={`text-[#16151C] transition-all duration-200 ease-in-out  ${
          !editable ? "cursor-not-allowed  bg-gray-50" : ""
        } ${
          border ? "  border-b  border-[#A2A1A833]" : ""
        }  p-2 font-light text-base`}
        {...register}
        placeholder={placeHolder}
        readOnly={!editable}
        name={name}
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}
