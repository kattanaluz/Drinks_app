import css from "./spirit.module.css";

export default function Spirit({ data }) {
  const rawText = data.ingredients[0].strDescription;
  console.log(rawText);
  let periodPosition = rawText.indexOf(".");
  const firstSentence = rawText.slice(0, periodPosition + 1);
  const firstRemainderText = rawText.substring(periodPosition + 1);

  periodPosition = firstRemainderText.indexOf(".");
  const secondSentence = firstRemainderText.slice(0, periodPosition + 1);
  const secondRemainderText = firstRemainderText.substring(periodPosition + 1);

  periodPosition = secondRemainderText.indexOf(".");
  const thirdSentence = secondRemainderText.slice(0, periodPosition + 1);

  return (
    <div className={css.spiritWrapper}>
      <h1 className={css.spiritH1}>
        {data.ingredients[0].strIngredient.toUpperCase()}
      </h1>
      <div className={css.divisionLine}></div>
      <div>
        <p className={css.spiritParagraph}>{firstSentence}</p>
        <p className={css.spiritParagraph}>{secondSentence}</p>
        <p className={css.spiritParagraph}>{thirdSentence}</p>
      </div>
    </div>
  );
}
