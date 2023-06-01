import "../bam/bam.css";
import { Button } from "./button";
export const Bam = () => {
  return (
    <>
      <div className="bam-box">
        <div className="container">
          <div className="bam-left">
            <h1>Səs-küy probleminin effektiv həlli bir gündə mənzillərdə *</h1>
            <p></p>
          </div>
          <div className="bam-right">
            Öz həyatını yaşa, qonşuların həyatını deyil
          </div>
            <Button
            text='Qiymətlər'

            />
            <Button
            text='Sifariş göndər'
            />
        </div>
      </div>
    </>
  );
};
