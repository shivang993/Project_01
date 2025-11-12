let Opp = function () {
  return (
    <div className="py-10 overflow-hidden bg-white">
      <div className="w-full px-6 mx-auto sm:px-8 lg:px-10">
        
        {/* 🔹 Top Row (scrolls left) */}
        <div className="relative p-4 mb-6 overflow-hidden rounded-lg bg-slate-50">
          <div
            className="flex gap-10 whitespace-nowrap animate-[scroll-left_25s_linear_infinite]"
            style={{ width: "max-content" }}
          >
            {/* Row 1 */}
            {[
              "google.com",
              "microsoft.com",
              "amazon.com",
              "facebook.com",
            //   "ibm.com",
              "oracle.com",
              "dell.com",
              "intel.com",
            ].map((logo) => (
              <img
                key={logo}
                src={`https://logo.clearbit.com/${logo}`}
                alt={logo}
                className="w-auto h-12"
              />
            ))}
            {/* Duplicate for looping */}
            {[
              "google.com",
              "microsoft.com",
              "amazon.com",
              "facebook.com",
            //   "ibm.com",
              "oracle.com",
              "dell.com",
              "intel.com",
            ].map((logo) => (
              <img
                key={`dup-${logo}`}
                src={`https://logo.clearbit.com/${logo}`}
                alt={logo}
                className="w-auto h-12"
              />
            ))}
          </div>
        </div>

        {/* 🔹 Bottom Row (scrolls right) */}
        <div className="relative p-4 overflow-hidden bg-white rounded-lg">
          <div
            className="flex gap-10 animate-[scroll-right_30s_linear_infinite]"
            style={{ width: "max-content" }}
          >
            {/* Row 2 */}
            {[
              "hp.com",
              "siemens.com",
              "accenture.com",
              "cisco.com",
              "sap.com",
              "tcs.com",
              "wipro.com",
              "infosys.com",
            ].map((logo) => (
              <img
                key={logo}
                src={`https://logo.clearbit.com/${logo}`}
                alt={logo}
                className="w-auto h-12"
              />
            ))}
            {/* Duplicate for looping */}
            {[
              "hp.com",
              "siemens.com",
              "accenture.com",
              "cisco.com",
              "sap.com",
              "tcs.com",
              "wipro.com",
              "infosys.com",
            ].map((logo) => (
              <img
                key={`dup-${logo}`}
                src={`https://logo.clearbit.com/${logo}`}
                alt={logo}
                className="w-auto h-12"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opp;
