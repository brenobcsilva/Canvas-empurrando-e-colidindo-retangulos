function blockRect(r1, r2){
    var catX = r1.centerX() - r2.centerX();
    var catY = r1.centerY() - r2.centerY();
    
    var sumHalfWidth = r1.halfWidth() + r2.halfWidth();
    var sumHalfHeight = r1.halfHeight() + r2.halfHeight();
    
    if(Math.abs(catX) < sumHalfWidth && Math.abs(catY) < sumHalfHeight){
//        r2.visible = false;
//        setTimeout(function(){
//            r2.visible = true;
//        }, 1000);
    var overlapX = sumHalfWidth - Math.abs(catX);
    var overlapY = sumHalfHeight - Math.abs(catY);
    
    if(overlapX >= overlapY){
        if(catY > 0){
            r1.posY += overlapY;
        }else{
            r1.posY -= overlapY;
        }
    }else{
        if(catX > 0){
            r1.posX += overlapX;
        }else{
            r1.posX -= overlapX;
        }
    }
    }
    
}