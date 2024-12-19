import React from "react";

const ProductSpecificationList = ({ specifications }) => {
  return (
    <div className="bg-gray-100 p-6 mt-8 rounded-lg">
    <h2 className="text-2xl font-bold text-customBlue mb-4 text-center">
      Specification
    </h2>
    <div className="flex justify-center">
      <div className="w-[52%] flex justify-end">
        <div className="">
          <ul className="list-disc list-inside text-sm text-gray-700 text-wrap">
            {specifications
              .slice(0, Math.ceil(specifications.length / 2))
              .map((point, index) => (
                <li
                  key={index}
                  className="pr-3"
                  style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
                >
                  {point}
                </li>
              ))}
          </ul>
        </div>
      </div>

      <div className="w-[48%]">
        <ul className="list-disc list-inside text-sm text-gray-700">
          {specifications
            .slice(Math.ceil(specifications.length / 2))
            .map((point, index) => (
              <li
                key={index}
                style={{ textIndent: "-1.5em", paddingLeft: "1.5em" }}
              >
                {point}
              </li>
            ))}
        </ul>
      </div>
    </div>
  </div>
  );
};

export default ProductSpecificationList;
