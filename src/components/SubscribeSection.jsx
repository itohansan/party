import React, { useState, useEffect } from "react";
import Form from "./Form";

function SubscribeSection() {
  const [showForm, setShowForm] = useState(false);

  // 🔒 lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showForm ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showForm]);
  // close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setShowForm(false);
    };
    if (showForm) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showForm]);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="w-[200px] bg-[#3772ff] hover:brightness-90 text-[#f8f9fa] py-3 px-5 rounded-4xl"
        >
          Subscribe
        </button>
      ) : (
        <>
          {/* Overlay background */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setShowForm(false)}
          >
            {/* Overlay visual layer */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <div
              className="relative w-full sm:w-[425px] md:w-[750px] lg:w-[850px]
                       h-[90vh] md:h-[80vh] 2xl:h-[75vh]
                       p-2 rounded-4xl flex flex-col md:flex-row
                       bg-[#000814]/90 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button floating at top */}
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 px-2 py-1 bg-black text-white hover:bg-black/80 rounded-full shadow-md "
              >
                ✕
              </button>

              {/* Left (Image) */}
              <div className="flex-1 rounded-4xl bg-[url('/images/ibiza-vip.jpg')] bg-no-repeat bg-center bg-cover"></div>

              {/* Right (Form) */}
              <div className="flex-1 flex overflow-y-auto">
                <Form
                  className="w-full"
                  title="Sign-up now to be the first to receive latest event update"
                  disclaimer={
                    <>
                      We will keep your data as long as you allow us and we are
                      bound by law. Your Data Protection rights are Access,
                      Rectification, Erasure, Restriction of processing, Data
                      Portability and Object. You might exercise them by written
                      enquiry to USHUAÏA ENTERTAINMENT SL, AVDA. BARTOLOMÉ
                      ROSSELLÓ 18, 07800 IBIZA (ISLAS BALEARES) or THE NIGHT
                      LEAGUE SL, APDO. CORREOS, 1020, 07817 SANT JORDI DE SES
                      SALINES (ISLAS BALEARES) or by email to{" "}
                      <a
                        href="mailto:data.protection@thenightleague.com"
                        className="text-blue-600 underline"
                      >
                        data.protection@thenightleague.com
                      </a>
                      .
                      <br />
                      In case of disagreement, you might make a complaint to the{" "}
                      <a
                        href="https://www.aepd.es"
                        target="_blank"
                        className="text-blue-600 underline"
                        rel="noreferrer"
                      >
                        Spanish Data Protection Agency
                      </a>
                      .
                    </>
                  }
                  fields={[
                    {
                      name: "name",
                      type: "text",
                      placeholder: "Name",
                      required: true,
                      row: "row1",
                    },
                    {
                      name: "surname",
                      type: "text",
                      placeholder: "Surname",
                      required: true,
                      row: "row1",
                    },
                    {
                      name: "email",
                      type: "email",
                      placeholder: "Enter email",
                      required: true,
                    },
                    {
                      name: "phone",
                      type: "number",
                      placeholder: "Phone",
                      required: true,
                      row: "row2",
                    },
                    {
                      name: "option",
                      placeholder: "Number of People",
                      type: "select",
                      required: true,
                      row: "row2",
                      options: [
                        { value: "one", label: "One" },
                        { value: "two", label: "Two" },
                        { value: "three", label: "Three" },
                      ],
                    },
                    {
                      name: "comment",
                      label: "Comment",
                      type: "textarea",
                      placeholder: "Optional comment",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SubscribeSection;
