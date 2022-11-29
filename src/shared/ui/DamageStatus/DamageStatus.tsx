import style from './DamageStatus.module.scss';

interface IDamageStatus {
  damageShipImages: Array<string>,
  misImages: Array<string>
}

function DamageStatus({ damageShipImages, misImages }: IDamageStatus) {
  return <div className={style.damageStatus}>
    <div>
      {damageShipImages && damageShipImages.map((src: string) => {
        return <img src={src} alt="damage image" />
      })}
      {misImages && misImages.map((src: string) => {
        return <img src={src} alt="miss image" />
      })}
    </div>
  </div>
}

export default DamageStatus;
