function overlapCheck(rht1, top1, lft1, btm1, rht2, top2, lft2, btm2){
    return (btm2<top1<top2 || btm1<top2<top1) && (lft1<lft2<rht1 || lft2<lft1<rht2)
}