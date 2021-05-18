var reloadRatio;
const reloadTime = 120;
const shotgunSpread = 60;
Vars.content.blocks().each( t => {
  if (t instanceof Turret) {
    //Multiply reload, multiply shots, set spread
    reloadRatio = reloadTime / t.reloadTime;
    if (reloadRatio > 1) {
      reloadRatio = Math.floor(reloadRatio);
      t.reloadTime *= reloadRatio;
      t.shots *= reloadRatio;
      t.spread = shotgunSpread / t.shots;
      t.alternate = false; //it was causing problems
      t.ammoPerShot *= reloadRatio;
      t.burstSpacing = 0;
    }
  }
});
Vars.content.units().each( u => {
  u.weapons.each( w => {
    reloadRatio = reloadTime / w.reload;
    if (reloadRatio > 1) {
      reloadRatio = Math.floor(reloadRatio);
      w.reload *= reloadRatio;
      w.shots *= reloadRatio;
      w.spacing = shotgunSpread / w.shots;
      w.alternate = false;
      w.shotDelay = 0;
    }
  });
});