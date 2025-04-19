class Caos {
  static unleash(): void {}
 }
 
 
 /** The system of truth and illusion */
 class Oracle {
   static predict(): boolean {
     if(Math.random() > 0.5){
       // You are the One.
       return true;
     }
 
     // Not in this life.
     return false;
   }
 }
 
 /** The guide to awakening */
 class Morpheus {
   /** Offer the choice between truth and illusion */
   static offerChoice(target: Neo): void {
     const tookRedPill = Math.random() > 0.5;
     target.awakened = tookRedPill;
   }
 }
 
 /** Just a guy */
 class Neo {
   awakened: boolean = false;
 
   stopBullets(): void {
     if (!this.awakened) {
       console.log("What are you trying to tell me? That I can dodge bullets?");
       return;
     }
 
     console.log("No. I'm trying to tell you that when you're ready...");
     console.log("You won't have to.");
   }
 }
 
 // The story unfolds
 const neo = new Neo();
 
 const prophecy = Oracle.predict();
 
 if(prophecy){
   Morpheus.offerChoice(neo);
   neo.stopBullets();
   
 } else {
   Caos.unleash();
 }