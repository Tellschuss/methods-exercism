// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
 export function seeingDouble(deck) {
    return deck.map((i) => i * 2)
   }
   
   /**
    *  Creates triplicates of every 3 found in the deck.
    *
    * @param {number[]} deck
    *
    * @returns {number[]} deck with triplicate 3s
    */
   export function threeOfEachThree(deck) {
    return deck.reduce((acc, cur) => {
           if (cur === 3) {
               var duplicatedValueArray = new Array(3).fill(3);
               acc = acc.concat(duplicatedValueArray)
           } else {
               acc.push(cur);
           }
           return acc;
       }, [])
   }
     
   
   /**
    * Extracts the middle two cards from a deck.
    * Assumes a deck is always 10 cards.
    *
    * @param {number[]} deck of 10 cards
    *
    * @returns {number[]} deck with only two middle cards
    */
   export function middleTwo(deck) {
       let theMiddleLeft = Math.floor((deck.length -1) / 2);  
       let middleValueLeft = deck[theMiddleLeft]; 
       let middleValueRight = deck[theMiddleLeft + 1]; 
       return [middleValueLeft, middleValueRight]
   }
   
   /**
    * Moves the outside two cards to the middle.
    *
    * @param {number[]} deck with even number of cards
    *
    * @returns {number[]} transformed deck
    */
   
   export function sandwichTrick(deck) {
     let first = deck.shift();
     let last = deck.pop();
     let center = deck.length /2 
     deck.splice(center, 0, last, first)
   return deck;
   }
   
   /**
    * Removes every card from the deck except 2s.
    *
    * @param {number[]} deck
    *
    * @returns {number[]} deck with only 2s
    */
   export function twoIsSpecial(deck) {
     return deck.filter((card) => card === 2)
   }
   
   /**
    * Returns a perfectly order deck from lowest to highest.
    *
    * @param {number[]} deck shuffled deck
    *
    * @returns {number[]} ordered deck
    */
   export function perfectlyOrdered(deck) {
   deck.sort((a, b) => a-b)
   return deck
   }
   
   /**
    * Reorders the deck so that the top card ends up at the bottom.
    *
    * @param {number[]} deck
    *
    * @returns {number[]} reordered deck
    */
   export function reorder(deck) {
   return deck.reverse()
   }

   
   