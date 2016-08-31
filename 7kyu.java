// Two Fighters, One Winner.

public class Kata {
  public static String declareWinner(Fighter fighter1, Fighter fighter2, String firstAttacker) {
      Fighter first = fighter1.name == firstAttacker ? fighter1 : fighter2;
      Fighter second = fighter1.name == firstAttacker ? fighter2 : fighter1;
      do {
            second.health -= first.damagePerAttack;
            first.health -= second.damagePerAttack;
          }
      while(second.health > 0 && first.health > 0);
  
      return second.health <= 0 ? first.name : second.name;
    }
}
