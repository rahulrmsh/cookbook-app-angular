import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[] = [
    new Recipe(
      'Turkey Tetrazzini',
      'Before adding the ingredients to the casserole dish, line it with foil, using enough so that the foil comes up the sides and above the lips of all sides of the dish. Follow Steps 1 through 7. Bake as directed in Step 8. Cool the cooked casserole completely. Cover the cooled casserole with a layer of foil and place it in the freezer, in the casserole dish. Once the casserole is completely frozen, pop it out of the casserole dish and wrap it tightly in a second layer of foil. Freeze for up to 3 months.',
      'https://www.simplyrecipes.com/thmb/n00z623LEMGNe-fLJT91Gyx_lJo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Turkey-Tetrazzini-Lead-7-3ba1685f65b5477eb24d5ea231fac084.jpg'
    ),
    new Recipe(
      'Turkey Tetrazzini',
      'Before adding the ingredients to the casserole dish, line it with foil, using enough so that the foil comes up the sides and above the lips of all sides of the dish. Follow Steps 1 through 7. Bake as directed in Step 8. Cool the cooked casserole completely. Cover the cooled casserole with a layer of foil and place it in the freezer, in the casserole dish. Once the casserole is completely frozen, pop it out of the casserole dish and wrap it tightly in a second layer of foil. Freeze for up to 3 months.',
      'https://www.simplyrecipes.com/thmb/n00z623LEMGNe-fLJT91Gyx_lJo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Turkey-Tetrazzini-Lead-7-3ba1685f65b5477eb24d5ea231fac084.jpg'
    ),
    new Recipe(
      'Turkey Tetrazzini',
      'Before adding the ingredients to the casserole dish, line it with foil, using enough so that the foil comes up the sides and above the lips of all sides of the dish. Follow Steps 1 through 7. Bake as directed in Step 8. Cool the cooked casserole completely. Cover the cooled casserole with a layer of foil and place it in the freezer, in the casserole dish. Once the casserole is completely frozen, pop it out of the casserole dish and wrap it tightly in a second layer of foil. Freeze for up to 3 months.',
      'https://www.simplyrecipes.com/thmb/n00z623LEMGNe-fLJT91Gyx_lJo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Turkey-Tetrazzini-Lead-7-3ba1685f65b5477eb24d5ea231fac084.jpg'
    ),
    new Recipe(
      'Turkey Tetrazzini',
      'Before adding the ingredients to the casserole dish, line it with foil, using enough so that the foil comes up the sides and above the lips of all sides of the dish. Follow Steps 1 through 7. Bake as directed in Step 8. Cool the cooked casserole completely. Cover the cooled casserole with a layer of foil and place it in the freezer, in the casserole dish. Once the casserole is completely frozen, pop it out of the casserole dish and wrap it tightly in a second layer of foil. Freeze for up to 3 months.',
      'https://www.simplyrecipes.com/thmb/n00z623LEMGNe-fLJT91Gyx_lJo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Turkey-Tetrazzini-Lead-7-3ba1685f65b5477eb24d5ea231fac084.jpg'
    ),
    new Recipe(
      'Turkey Tetrazzini',
      'Before adding the ingredients to the casserole dish, line it with foil, using enough so that the foil comes up the sides and above the lips of all sides of the dish. Follow Steps 1 through 7. Bake as directed in Step 8. Cool the cooked casserole completely. Cover the cooled casserole with a layer of foil and place it in the freezer, in the casserole dish. Once the casserole is completely frozen, pop it out of the casserole dish and wrap it tightly in a second layer of foil. Freeze for up to 3 months.',
      'https://www.simplyrecipes.com/thmb/n00z623LEMGNe-fLJT91Gyx_lJo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Turkey-Tetrazzini-Lead-7-3ba1685f65b5477eb24d5ea231fac084.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
