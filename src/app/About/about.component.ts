import { Component } from '@angular/core';
import { Member } from './member/member.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  members:Member[] = [
    {name:"John Rafael Dee",role:"Home, Game Info, About",image:'https://scontent.fcrk1-1.fna.fbcdn.net/v/t39.30808-1/307102024_796648078042226_5554495226624711770_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeE8hsPcFHr3wuJPVlRFt2bN86L576cNtT_zovnvpw21P-enkXxh3WYlKHZtocfg6BDzx22FyMC6icIFIHiRA6lc&_nc_ohc=8kTOHlLU3GgAX85U6zB&_nc_ht=scontent.fcrk1-1.fna&oh=00_AfDt0Bwkys5Y_xfuDMbQ1P_o8-_MHywqUXpEu0iKU3GnQw&oe=648ED3EC',title:"Leader, Full Stack"},
    {name:"Kurt de Leon",role:"Profile",image:'https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-1/235252455_3857701217669225_6020221615064503269_n.jpg?stp=dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFlQWQ3sYTWxvRvqbCnh84wt9dKvk8wYGy310q-TzBgbBcfgBOS9pjNKB4gOsTCHQEwuY4_2BhFoh1A7xHUSYLH&_nc_ohc=VOMi-rzv8N4AX9EDnHH&_nc_ht=scontent.fcrk1-4.fna&oh=00_AfDM_8A2vcOh5Zx3J2lrRcJ41v0cAWLXM1i-ElRUdvi0Og&oe=648DFBEF',title:"UI Designer"},
    {name:"Raymon Mendez Orobia",role:"Game Codes",image:'https://scontent.fcrk1-4.fna.fbcdn.net/v/t1.6435-1/180442114_309096360628270_5047664643721299222_n.jpg?stp=dst-jpg_s200x200&_nc_cat=109&ccb=1-7&_nc_sid=f67be1&_nc_eui2=AeG1xaWbQFDTTQYlEa4tEW9tcDbMloV1AGZwNsyWhXUAZvF3jX5WXJupYVl71aQ9UdtgQoWn5SFFGbIzuMdnzUtw&_nc_ohc=vQruVtu4wDIAX-ioNqt&_nc_ht=scontent.fcrk1-4.fna&oh=00_AfBHmZYncJar962xOy552tQAaDlkpBf1UbqKnHSqqyfgXQ&oe=64B11825',title:"UI Designer"},
    {name:"Richard Richard",role:"Community",image:'https://scontent.fcrk1-1.fna.fbcdn.net/v/t39.30808-1/340265602_127389036891608_7552253074998667844_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGEyj4KfrqfM4ssnAxYYwDH9ZaQyr_r_hr1lpDKv-v-GkVDSuH2BWjY74tRNdlxSuc3jnWRMDqcn_Au9OO-PsPw&_nc_ohc=RbhhME1w2SgAX_5Axz5&_nc_ht=scontent.fcrk1-1.fna&oh=00_AfA7aWyzTCJJcbqxXfSCvsCQ6LKeZ2tUlt0t9-WqNarc-g&oe=648E5F56',title:"UI Designer"},
    {name:"Darren Dave Macrol",role:"Login/Signup",image:'https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-1/339827011_1279529035968982_1477036824252742469_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEFpQ9pKB7WcKaAL1a3BTVVnStRHL4cuTudK1Ecvhy5O6_suP36NQC5Wj_CkG2ZKgX7hCKD9ZSrwY8o_WD7q7Nw&_nc_ohc=z1waXiveHFMAX-SjMj-&_nc_ht=scontent.fcrk1-4.fna&oh=00_AfCWa7tWpJE7pYYPG1r5MScBb8vgpIxE3ZK2ZQG2T5o0Vw&oe=648EBB9F',title:"UI Designer"},
  ]
}
