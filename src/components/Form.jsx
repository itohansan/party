import React, { useState } from "react";

function Form1({ title, className }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    option: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className={`flex justify-center items-center bg-gray-100 ${className}`}
    >
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full h-full bg-blue-300 p-6rounded-2xl shadow-md"
      >
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2 ">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Dropdown */}
          <div>
            <label className="block mb-1 text-sm font-medium">
              Number of People
            </label>
            <select
              name="option"
              value={formData.option}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-400"
              required
            >
              <option value="">Select a number</option>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>
          </div>

          {/* Textarea */}
          <div>
            <label className="block mb-1 text-sm font-medium">Comment</label>
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              rows="4"
              className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-400"
              placeholder="Comment (optional)"
            />
          </div>
          <div className="flex flex-col relative">
            {/* Disclaimer */}
            <div className="order-2 md:order-1 rounded-md bg-white text-gray-700 text-sm p-2 ">
              <p>
                We will keep your data as long as you allow us and we are bound
                by law. Your Data Protection rights are Access, Rectification,
                Erasure, Restriction of processing, Data Portability and Object.
                You might exercise them by written enquiry to USHUAÏA
                ENTERTAINMENT SL, AVDA. BARTOLOMÉ ROSSELLÓ 18, 07800 IBIZA
                (ISLAS BALEARES) or THE NIGHT LEAGUE SL, APDO. CORREOS, 1020,
                07817 SANT JORDI DE SES SALINES (ISLAS BALEARES) or by email to
                data.protection@thenightleague.com.
                <br />
                In case of disagreement, you might make a complaint to the
                Spanish Data Protection Agency (www.aepd.es)
                <br />
                <span className="font-semibold">Dress code</span>: Flip-flops,
                tank tops and swimwear are not allowed. Men must wear long
                pants, not shorts. We don’t allow any sports team merch or any
                ideological attire that may cause offence.
                <br />
                <span className="font-semibold">Age restriction</span>: All
                attendants must be aged 18 or older to enter Hï Ibiza. Anyone
                younger than 18 or anyone who is unable to prove their age via
                valid identification will be refused entry.
                <br />
                <span className="font-semibold">Safety</span>: As a client, you
                are responsible for your own safety and the security of your
                belongings while attending (or travelling to and from) our
                events.
              </p>
            </div>

            {/* Sticky submit button */}
            <div className="order-1 md:order-2 pt-2 md:sticky md:bottom-0 md:bg-blue-300">
              <div className="pointer-events-none absolute bottom-12 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent hidden md:block"></div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

// export default Form;

// function Form({ title, className, disclaimer, fields = [] }) {
//   const initialData = fields.reduce((acc, field) => {
//     acc[field.name] = "";
//     return acc;
//   }, {});

//   const [formData, setFormData] = useState(initialData);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted", formData);
//   };

//   return (
//     <div className={`flex justify-center items-center ${className}`}>
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col w-full h-full p-6 rounded-2xl shadow-md bg-[#fff2f6]"
//       >
//         <div className="flex-1 overflow-y-auto space-y-4 pr-2">
//           <h2 className="text-2xl font-bold text-gray-500">{title}</h2>

//           {/* render filelds dynamically */}
//           {fields.map((field) => (
//             <div key={field.name}>
//               <label htmlFor="" className="block mb-1 text-sm font-medium">
//                 {field.label}
//               </label>

//               {field.type === "textarea" ? (
//                 <textarea
//                   name={field.name}
//                   value={formData[field.name]}
//                   onChange={handleChange}
//                   rows={fields.rows}
//                   className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-400"
//                   placeholder={field.placeholder}
//                   required={field.required}
//                 />
//               ) : field.type === "select" ? (
//                 <select
//                   name={field.name}
//                   value={formData[field.name]}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300 required={field.required}"
//                 >
//                   <option value=""> Select an option</option>
//                   {field.options?.map((opt) => (
//                     <option key={opt.value} value={opt.value}>
//                       {opt.label}
//                     </option>
//                   ))}
//                 </select>
//               ) : (
//                 <input
//                   type={field.type}
//                   name={field.name}
//                   value={formData[field.name]}
//                   onChange={handleChange}
//                   className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-400"
//                   placeholder={field.placeholder}
//                   required={field.required}
//                 />
//               )}
//             </div>
//           ))}

//           <div className="flex flex-col relative">
//             {/* disclaimer */}
//             <div className="order-2 md:order-1 rounded-md text-gray-700 text-sm p-2 ">
//               {disclaimer && (
//                 <div className="text-sm text-gray-600 mt-4">{disclaimer}</div>
//               )}
//             </div>

//             {/* Sticky submit button bg-[#fff2f6]*/}
//             <div className="order-1 md:order-2 mt-4 md:sticky  bg-[#fff2f6] md:bottom-0  w-full h-16 flex justify-end flex-col">
//               <div className="pointer-events-none absolute bottom-[48.3px] left-0 right-0 h-12 bg-gradient-to-t from-[#fff2f6] to-transparent hidden md:block"></div>
//               <div className="">
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white p-3 rounded-4xl hover:bg-blue-700 transition"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Form;

function Form({ title, className, disclaimer, fields = [] }) {
  // initial state
  const initialData = fields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  // group fields by row
  const groupedFields = fields.reduce((acc, field) => {
    const row = field.row || field.name; // group by row if provided, else unique
    if (!acc[row]) acc[row] = [];
    acc[row].push(field);
    return acc;
  }, {});

  return (
    <div className={`flex justify-center items-center ${className} `}>
      <form
        onSubmit={handleSubmit}
        className="text-[12px] sm:text-[18px] flex flex-col w-full h-full p-6 font-light rounded-2xl shadow-md bg-[#1E2022] text-[#f8f9fa]  gap-6"
      >
        <div className="flex-1 overflow-y-auto space-y-6 pr-2">
          <h2 className="text-[18px] text-center  ">{title}</h2>

          {/* render fields row by row */}
          {Object.entries(groupedFields).map(([row, rowFields]) => (
            <div
              key={row}
              className={`flex gap-7 ${
                rowFields.length > 1 ? "flex-row" : "flex-col"
              }`}
            >
              {rowFields.map((field) => (
                <div key={field.name} className="flex-1">
                  <label className="block mb-1 text-sm font-medium">
                    {field.label}
                  </label>

                  {field.type === "textarea" ? (
                    <textarea
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      rows={field.rows || 3}
                      className="w-full p-3 border rounded-lg focus:ring text-[#f8f9fa] focus:ring-blue-400"
                      placeholder={field.placeholder}
                      required={field.required}
                    />
                  ) : field.type === "select" ? (
                    <select
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required={field.required}
                      className="w-full p-3 border rounded-lg focus:ring text-[10px] sm:text-[18px] text-[#f8f9fa] focus:ring-blue-300"
                    >
                      <option value="">{field.placeholder}</option>
                      {field.options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full p-3 border text-[#f8f9fa]  rounded-lg focus:ring focus:ring-blue-400"
                      placeholder={field.placeholder}
                      required={field.required}
                    />
                  )}
                </div>
              ))}
            </div>
          ))}
          <div className="flex flex-col ">
            {/* disclaimer */}
            {disclaimer && (
              <div className="rounded-md text-gray-700 order-2 md:order-1">
                <div className="text-sm text-[#f8f9fa] text-[11px] mt-4">
                  {disclaimer}
                </div>
              </div>
            )}

            {/* sticky submit */}
            <div className="mt-4 md:sticky md:bottom-0 bg-[#1E2022] w-full h-16 flex flex-col justify-end order-1 md:order-2">
              <div className="pointer-events-none absolute bottom-14 md:bottom-14  left-0 right-0 h-12 bg-gradient-to-t from-[#1E2022] to-transparent hidden md:block"></div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-4xl hover:bg-blue-700 transition "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
