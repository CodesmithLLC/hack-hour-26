/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 *
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */


function scoreHand(cards) {
  const handRanks = {
    doubleDouble: 1000,
    fullHouse: 200, // add to a triple and a pair to beat a straight
    straight: 800,
    triple: 500,
    pair: 200,
  };


  const hand = cards.slice();
  hand.sort();

  const cardCounts = {};

  hand.forEach((card) => {
    if (cardCounts[card] === undefined) cardCounts[card] = 0;
    cardCounts[card] += 1;
  });

  let score = 0;
  let highCard = 0;
  let sum = 0;

  Object.entries(cardCounts).forEach(([card, count]) => {
    sum += card;
    if (count === 2) score += handRanks.pair;
    if (count === 3) score += handRanks.triple;
    if (count === 4) score += handRanks.doubleDouble;
    if (score === 700) score += handRanks.fullHouse;
    if (card > highCard) highCard = card;
  });

  // check for straights
  if (score === 0) {
    console.log('no score yet...');
    const diff = hand[4] - hand[0];
    const avg = sum / 5;
    if (diff === 4 && avg === hand[2]) score += handRanks.straight;
  }

  score += Number(highCard);

  return score;
}

function poker(hand1, hand2) {
  const score1 = scoreHand(hand1);
  const score2 = scoreHand(hand2);

  console.log({ score1, score2 });

  if (score1 > score2) return 'Player 1 wins';
  if (score1 < score2) return 'Player 2 wins';
  return 'Draw';
}

const h1 = [2, 2, 2, 2, 6];
const h2 = [3, 3, 4, 5, 7];

console.log(poker(h1, h2));

module.exports = poker;
