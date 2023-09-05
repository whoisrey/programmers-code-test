function solution(hp) {
  let bossAnt = Math.floor(hp / 5)

  return Math.floor(hp % 5 === 0 ? bossAnt :
                    (hp % 5) % 3 === 0 ? bossAnt + ((hp % 5) / 3) :
                    bossAnt + ((hp % 5) / 3) + ((hp % 5) % 3))
}