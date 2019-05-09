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
function poker(hand1, hand2) {
  // sort the array and start couting the number of cards
  // const hand1Sorted = hand1.slice();
  // const hand2Sorted = hand2.slice();

  // hand1Sorted.sort((a, b) => (a < b));
  // hand2Sorted.sort((a, b) => (a < b));
  // console.log('hand1', hand1Sorted);
  // console.log('hand2', hand2Sorted);

  const h1Obj = {};
  const h2Obj = {};
  for (let i = 0; i < hand1.length; i += 1) {
    if (!h1Obj[hand1[i]]) h1Obj[hand1[i]] = 1;
    else {
      h1Obj[hand1[i]] += 1;
    }
  }
  for (let i = 0; i < hand2.length; i += 1) {
    if (!h2Obj[hand2[i]]) h2Obj[hand2[i]] = 1;
    else {
      h2Obj[hand2[i]] += 1;
    }
  }
  console.log('h1obj', h1Obj);
  console.log('h2obj', h2Obj);
  const h1Cards = Object.keys(h1Obj).sort((a, b) => (a < b));
  const h2Cards = Object.keys(h2Obj).sort((a, b) => (a < b));
  console.log('h1val', h1Cards);
  console.log('h2val', h2Cards);
  if (h1Cards.length === 2 && h2Cards.length === 2) {
    h1Cards.
  }
}

module.exports = poker;
