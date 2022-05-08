function overlapCheck(topRightXR1, topRightYR1, bottomLeftXR1, bottomLeftYR1, topRightXR2, topRightYR2, bottomLeftXR2, bottomLeftYR2){
    let rht1 = topRightXR1, top1 = topRightYR1, lft1 = bottomLeftXR1, btm1 = bottomLeftYR1, rht2 = topRightXR2, top2 = topRightYR2, lft2 = bottomLeftXR2, btm2 = bottomLeftYR2;
    if ((btm2<top1<top2 || btm1<top2<top1) && (lft1<lft2<rht1 || lft2<lft1<rht2)){
        return true
    }
    return false
}