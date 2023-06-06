import contract from "../../img/contract.svg";
import okayFinger from "../../img/okayFinger.svg";
import NoVoice from "../../img/NoVoice.svg";
import salary from "../../img/salary.svg";
import React from "react";

const Solve = () => {
  return (
    <>
      <div className="solve-box">
        <div className="container">
          <div className="solve-box-head">
            <h2>Nə üçün biz?</h2>
            <p>
              Biz işə yaramayan və ya məna kəsb etməyən şeyləri satmadığımız
              üçün seçildik. Biz özümüz üçün aşağıdakı materialları və həll
              yollarını müəyyən etdik:
            </p>
          </div>

          <div className="solve-case-box">
            <div className="items">
              <img src={okayFinger} alt="okayFinger" />
              <p>Sadə və istifadəsi asan, hətta "nənələr" üçün də</p>
            </div>
            <div className="items">
              <img src={NoVoice} alt="NoVoice" />
              <p>
                Onlar təkcə laboratoriyada deyil, həm də sahədə effektivliyini
                sübut etmişlər.
              </p>
            </div>
            <div className="items">
              <img src={salary} alt="salary" />
              <p>
                Təxmini "şişirmək" vəzifəsi olan lazımsız elementləri ehtiva
                etmir
              </p>
            </div>
            <div className="items">
              <img src={contract} alt="contract" />
              <p>Bütün zəmanətlər sözlə deyil, müqavilədə qeyd olunub</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solve;
